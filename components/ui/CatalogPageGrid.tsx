import { getApiInstance } from '@/app/oneentry'
import { Section } from 'lucide-react';
import React from 'react'

async function CatalogPageGrid() {
    const api = await getApiInstance();
    const pages = await api?.Pages.getRootPages();
    const filteredPages = pages?.filter((page:any)=>page.type ==='forCatalogPages');

    console.log(filteredPages);
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pb-12">
        {/* {filteredPages?.map((page:any) =>(
            <CatalogPageLinkCard />

       ))} */}
    
    </Section>
  )
}

export default CatalogPageGrid