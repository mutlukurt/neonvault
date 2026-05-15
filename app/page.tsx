import { CollectionChannels } from "@/components/CollectionChannels";
import { CollectorFlow } from "@/components/CollectorFlow";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { CreateCollection } from "@/components/CreateCollection";
import { CreatorSpotlight } from "@/components/CreatorSpotlight";
import { ExploreArt } from "@/components/ExploreArt";
import { ExploreDrops } from "@/components/ExploreDrops";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HighestBid } from "@/components/HighestBid";
import { MarketStats } from "@/components/MarketStats";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-vault-ink text-white">
      <Header />
      <Hero />
      <MarketStats />
      <ExploreDrops />
      <HighestBid />
      <CreatorSpotlight />
      <CreateCollection />
      <ExploreArt />
      <CollectionChannels />
      <CollectorFlow />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
