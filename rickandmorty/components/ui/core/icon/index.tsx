"use client";

import { cssInterop } from "nativewind";
import React, { useMemo } from "react";
import { Svg } from "react-native-svg";
import { createIcon } from "@gluestack-ui/icon";
import { VariantProps } from "@gluestack-ui/nativewind-utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";

const iconStyle = tva({
  base: "pointer-events-none fill-none text-white",
  variants: {
    size: {
      "2xs": "h-3 w-3",
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-4.5 w-4.5",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
      "2xl": "h-7 w-7",
    },
  },
});

type IPrimitiveIcon = {
  as: React.ElementType;
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  className?: string;
  classNameColor?: string;
};

const PrimitiveIcon = React.forwardRef<
  React.ElementRef<typeof Svg>,
  IPrimitiveIcon
>(function PrimitiveIcon(
  {
    height,
    width,
    fill,
    color,
    classNameColor,
    size,
    stroke,
    as: AsComp,
    ...props
  },
  ref
) {
  const sizeProps = useMemo(() => {
    if (size) return { height: size, width: size };
    return { height: height ?? undefined, width: width ?? undefined };
  }, [size, height, width]);

  return (
    <AsComp
      ref={ref}
      {...props}
      {...sizeProps}
      color={color ?? classNameColor}
    />
  );
});

export const UIIcon = createIcon({ Root: PrimitiveIcon });

cssInterop(UIIcon, {
  className: {
    target: "style",
    nativeStyleToProp: {
      //@ts-ignore
      height: true,
      //@ts-ignore
      width: true,
      fill: true,
      //@ts-ignore
      color: "classNameColor",
      stroke: true,
    },
  },
});

type IIConProps = VariantProps<typeof iconStyle> &
  IPrimitiveIcon &
  React.ComponentPropsWithoutRef<typeof UIIcon>;

export const Icon = React.forwardRef<React.ElementRef<typeof Svg>, IIConProps>(
  function Icon({ size = "md", className, ...props }, ref) {
    const iconClass = iconStyle({
      class: className,
      size: typeof size === "string" ? size : undefined,
    });

    return <UIIcon ref={ref} {...props} className={iconClass} />;
  }
);
