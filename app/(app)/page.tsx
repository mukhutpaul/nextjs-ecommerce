import { Button } from "@/components/ui/button";
import Image from "next/image";
import banner from "@/app/banner.png"

export default function Home() {
  return (
    <main className="bg-white min-h-screen space-x-8">
    <Image
    src={banner}
    alt="banner"
    className="h-[220px] object-cover"
    
    />

    <div>
      {/* <TabSelector /> */}
       {/* <CatalogPageGrid /> */}
    </div>
    
    </main>
  );
}
