"use client";

import { Card, CardContent, CardFooter, MainContainer } from "@repo/ui";
import { APP_EDITOR_PATH } from "@repo/utils/constants";
import Link from "next/link";
import TemplateFilter from "../../../../components/template/template-filter";

// import TemplateFilter from "@/components/template/template-filter";

// import { Button } from "@repo/ui/components";

const FILTER_PREFIX = "templateCategories";

// TODO: Store categories in DB
const TEMPLATE_CATEGORIES = [
  {
    name: "Magic link",
    type: "Open source",
  },
  {
    name: "Newsletters",
    type: "Open source",
  },
  {
    name: "Notifications",
    type: "Open source",
  },
  {
    name: "Receipts",
    type: "Open source",
  },
  {
    name: "Reset password",
    type: "Open source",
  },
  {
    name: "Reviews",
    type: "Open source",
  },
  {
    name: "Welcome",
    type: "Open source",
  },
];

const TEMPLATE_CATEGORY_FILTERS = TEMPLATE_CATEGORIES.map((category) => ({
  ...category,
  filter: `${FILTER_PREFIX}.${category.name}`,
}));

export default function () {
  return (
    <>
      <div className="flex h-16 items-center gap-4 bg-white px-4 py-14 md:px-6">
        <MainContainer className="flex flex-col gap-2">
          <h1 className="text-2xl">Select a template to edit</h1>
          <p className="text-muted-foreground">
            Filter templates by categories
          </p>
        </MainContainer>
      </div>

      <MainContainer className="pt-10">
        {TEMPLATE_CATEGORY_FILTERS.map((category) => (
          <TemplateFilter category={category} />
        ))}
      </MainContainer>

      <MainContainer className="grid grid-cols-4 gap-5 py-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
          <Link href={`${APP_EDITOR_PATH}/${id}`}>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardContent className="p-0">
                <img
                  src="https://placehold.co/600x400"
                  alt="placeholder email image"
                  className="h-full w-full"
                />
              </CardContent>
              <CardFooter className="text-muted-foreground flex justify-between pt-6">
                <p>Card Footer</p>
                <p>12/05/2024</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </MainContainer>
    </>
  );
}
