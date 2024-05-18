import { Card, CardContent, CardFooter } from "@repo/ui";
import { APP_EDITOR_PATH } from "@repo/utils/constants";
import Link from "next/link";

export default function WorkspaceEmailList() {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-5 py-10">
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
    </div>
  );
}
