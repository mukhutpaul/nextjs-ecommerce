import { Button } from "@/components/ui/button";
import Image from "next/image";
import banner from "@/app/banner.png"
import TabSelector from "@/components/ui/TabSelector";
import CatalogPageGrid from "@/components/ui/CatalogPageGrid";

export default function Home() {
  return (
    <main className="bg-white min-h-screen space-x-8">
    <Image
    src={banner}
    alt="banner"
    className="h-[220px] object-cover"
    />
    <div className="mt-5 space-y-4 max-w-6xl mx-auto">
      <TabSelector />
       <CatalogPageGrid />
    </div>
    
    </main>
  );
}
