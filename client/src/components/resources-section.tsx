import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/hooks/use-language";
import { Download, ExternalLink, Play } from "lucide-react";
import type { Resource } from "@shared/schema";

export default function ResourcesSection() {
  const { t } = useLanguage();

  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'datasheet':
        return 'fas fa-file-pdf text-red-500';
      case 'guide':
        return 'fas fa-tools text-blue-500';
      case 'safety':
        return 'fas fa-shield-alt text-green-500';
      case 'case-study':
        return 'fas fa-chart-line text-purple-500';
      case 'calculator':
        return 'fas fa-calculator text-orange-500';
      case 'video':
        return 'fas fa-video text-red-600';
      default:
        return 'fas fa-file text-gray-500';
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case 'calculator':
        return t('resources.access');
      case 'video':
        return t('resources.watch');
      default:
        return t('resources.download');
    }
  };

  const getButtonIcon = (type: string) => {
    switch (type) {
      case 'calculator':
        return ExternalLink;
      case 'video':
        return Play;
      default:
        return Download;
    }
  };

  const handleResourceClick = (resource: Resource) => {
    if (resource.type === 'calculator' || resource.type === 'video') {
      // For interactive resources, this would navigate to the tool/video page
      window.open(resource.fileUrl || '#', '_blank');
    } else {
      // For downloadable resources, trigger download
      window.open(resource.fileUrl || '#', '_blank');
    }
  };

  return (
    <section id="resources" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            {t('resources.title')}
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Skeleton className="h-12 w-12 mx-auto mb-4" />
                    <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                    <Skeleton className="h-16 w-full" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            resources?.map((resource) => {
              const ButtonIcon = getButtonIcon(resource.type);
              return (
                <Card key={resource.id} className="hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <i className={`${getResourceIcon(resource.type)} text-4xl mb-4`}></i>
                      <h3 className="text-xl font-semibold text-navy-dark mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-text-light">
                        {resource.description}
                      </p>
                    </div>
                    <Button
                      className="w-full bg-accent-blue hover:bg-blue-600 text-white font-medium transition-all"
                      onClick={() => handleResourceClick(resource)}
                    >
                      <ButtonIcon className="h-4 w-4 mr-2" />
                      {getButtonText(resource.type)}
                    </Button>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
