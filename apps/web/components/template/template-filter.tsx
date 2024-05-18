"use client";

import { Button } from "@repo/ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  category: { name: string; type: string; filter: string };
};

export default function TemplateFilter({ category }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("filter", term);
    } else {
      params.delete("filter");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Button
      key={`TemplateFilter--${category.name}`}
      style={{ marginRight: 16, marginTop: 16 }}
      size="sm"
      onClick={() => handleSearch(category.filter)}
    >
      {category.name}
    </Button>
  );
}
