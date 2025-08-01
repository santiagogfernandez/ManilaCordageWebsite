import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import Home from "@/pages/home";
import Products from "@/pages/products";
import About from "@/pages/about";
import History from "./pages/history";
import Team from "./pages/team";
import Careers from "./pages/careers";
import Resources from "@/pages/resources";
import Quote from "@/pages/contact";
import CustomQuote from "@/pages/custom-quote";
import PrivacyPolicy from "@/pages/privacy-policy";
import NotFound from "@/pages/not-found";
import ManilaRope from "@/pages/products/manila-rope";
import SkylineRope from "@/pages/products/skyline-rope";
import DanlineRope from "@/pages/products/danline-rope";
import NylineRope from "@/pages/products/nyline-rope";
import EsterlineRope from "@/pages/products/esterline-rope";
import TeryproRope from "@/pages/products/terypro-rope";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/products/manila-rope" component={ManilaRope} />
      <Route path="/products/skyline-rope" component={SkylineRope} />
      <Route path="/products/danline-rope" component={DanlineRope} />
      <Route path="/products/nyline-rope" component={NylineRope} />
      <Route path="/products/esterline-rope" component={EsterlineRope} />
      <Route path="/products/terypro-rope" component={TeryproRope} />
      <Route path="/about" component={About} />
      <Route path="/about/history" component={History} />
      <Route path="/about/team" component={Team} />
      <Route path="/about/careers" component={Careers} />
      <Route path="/careers" component={Careers} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Quote} />
      <Route path="/quote" component={Quote} />
      <Route path="/custom-quote" component={CustomQuote} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
