import type { TrekConfig } from "../data/types";
import { InquiryForm } from "./InquiryForm";

/** Sticky enquiry rail. The form itself is a client component. See InquiryForm. */
export function InquiryRail({ config }: { config: TrekConfig }) {
  return (
    <aside className="rail" id="inquiry">
      <InquiryForm config={config} variant="rail" />
    </aside>
  );
}
