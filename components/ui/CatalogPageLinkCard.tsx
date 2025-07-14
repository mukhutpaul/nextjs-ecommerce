import { getApiInstance } from "@/app/oneentry"
import Link from "next/link";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces"
import {
  Card,
 // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight } from "lucide-react";

async function CatalogPageLinkCard({page}: {page:IPagesEntity}) {
    const apiInstance  = await getApiInstance();
    const  products = await apiInstance?.Products.getProductsByPageUrl(page.pageUrl,
        undefined,
        'fr_FR',
        //{limit:3}
    );
  return <Link href={`/detail/${page.pageUrl}`}>

    <Card className="border-none shadow-none rounded-[8px] bg-[#f8f8f8]">
    <CardHeader className="p-5 flex flex-row justify-between space-y-0">
        <CardTitle className="font-bold text-base text-[#2222]">
            {page.localizeInfos?.title}
        </CardTitle>
        <ArrowRight />
    </CardHeader>
    <CardContent className="flex items-center gap-2.5">
      {products?.map((product:any,i:any) =>{
        <ProductCard
        key={product.id}
        product={product}
        index = {i}
        />
      })}
    </CardContent>
   
    </Card> 

    </Link>
}

export default CatalogPageLinkCard