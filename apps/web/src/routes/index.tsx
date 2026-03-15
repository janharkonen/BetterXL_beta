import { api } from "@BetterXL_beta/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const healthCheck = useQuery(api.healthCheck.get);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2 flex items-center justify-center h-full">
      <div className="grid gap-6">Hello World</div>
    </div>
  );
}
