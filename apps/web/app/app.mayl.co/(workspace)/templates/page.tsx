import TemplateFilter from "@/components/template/template-filter";

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
    <div>
      {TEMPLATE_CATEGORY_FILTERS.map((category) => (
        <TemplateFilter category={category} />
      ))}
    </div>
  );
}
