import {
  useNavigateToStudioDocument,
  type DocumentHandle,
} from "@sanity/sdk-react";
import { Button } from "@sanity/ui";
import { Suspense } from "react";

function OpenInStudioButton({ handle }: { handle: DocumentHandle }) {
  const { navigateToStudioDocument } = useNavigateToStudioDocument(handle);
  return <Button onClick={navigateToStudioDocument} text="Open in Studio" />;
}

// Wrap the component with Suspense since the hook may suspend
export function OpenInStudio({ handle }: { handle: DocumentHandle }) {
  return (
    <Suspense fallback={<Button text="Loading..." disabled />}>
      <OpenInStudioButton handle={handle} />
    </Suspense>
  );
}
