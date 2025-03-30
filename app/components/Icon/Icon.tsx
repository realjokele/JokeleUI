import spriteHref from "./sprite.svg";
import type { SVGProps } from "react";
import type { IconName } from "./iconnames";

export type { IconName };

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName;
}) {
  return (
    <svg data-slot="icon" {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  );
}
