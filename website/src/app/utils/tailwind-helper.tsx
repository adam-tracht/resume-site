/**
 * Tailwind CSS helper functions for consistent styling across components
 * These utilities help apply the theme colors defined in globals.css
 */

// Types for color categories
export type ColorCategory = 'ecommerce' | 'ux' | 'ai' | 'data' | 'leadership';

// Types for neutral shades
export type NeutralShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

// Types for UI element colors
export type UIElementColor = 'timeline';

/**
 * Returns the appropriate background color class for icons based on category
 */
export function getIconBgClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'bg-ecommerce-bg',
    ux: 'bg-ux-bg',
    ai: 'bg-ai-bg',
    data: 'bg-data-bg',
    leadership: 'bg-leadership-bg',
  };
  
  return colorMap[color] || 'bg-gray-100';
}

/**
 * Returns the appropriate text color class for icons based on category
 */
export function getIconTextClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'text-ecommerce',
    ux: 'text-ux',
    ai: 'text-ai',
    data: 'text-data',
    leadership: 'text-leadership',
  };
  
  return colorMap[color] || 'text-gray-600';
}

/**
 * Returns the appropriate background color class based on category
 */
export function getBgClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'bg-ecommerce',
    ux: 'bg-ux',
    ai: 'bg-ai',
    data: 'bg-data',
    leadership: 'bg-leadership',
  };
  
  return colorMap[color] || 'bg-gray-500';
}

/**
 * Returns the appropriate light background color class based on category
 */
export function getLightBgClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'bg-ecommerce-light',
    ux: 'bg-ux-light',
    ai: 'bg-ai-light',
    data: 'bg-data-light',
    leadership: 'bg-leadership-light',
  };
  
  return colorMap[color] || 'bg-gray-300';
}

/**
 * Returns the appropriate dark background color class based on category
 */
export function getDarkBgClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'bg-ecommerce-dark',
    ux: 'bg-ux-dark',
    ai: 'bg-ai-dark',
    data: 'bg-data-dark',
    leadership: 'bg-leadership-dark',
  };
  
  return colorMap[color] || 'bg-gray-700';
}

/**
 * Returns the appropriate border color class based on category
 */
export function getBorderClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'border-ecommerce',
    ux: 'border-ux',
    ai: 'border-ai',
    data: 'border-data',
    leadership: 'border-leadership',
  };
  
  return colorMap[color] || 'border-gray-500';
}

/**
 * Returns the appropriate hover background color class based on category
 */
export function getHoverBgClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'hover:bg-ecommerce',
    ux: 'hover:bg-ux',
    ai: 'hover:bg-ai',
    data: 'hover:bg-data',
    leadership: 'hover:bg-leadership',
  };
  
  return colorMap[color] || 'hover:bg-gray-500';
}

/**
 * Returns the appropriate hover text color class based on category
 */
export function getHoverTextClass(color: ColorCategory): string {
  const colorMap: Record<ColorCategory, string> = {
    ecommerce: 'hover:text-ecommerce',
    ux: 'hover:text-ux',
    ai: 'hover:text-ai',
    data: 'hover:text-data',
    leadership: 'hover:text-leadership',
  };
  
  return colorMap[color] || 'hover:text-gray-600';
}

/**
 * Returns the background color class for UI elements
 */
export function getUIBgClass(element: UIElementColor): string {
  const elementMap: Record<UIElementColor, string> = {
    timeline: 'bg-timeline-bg',
  };
  
  return elementMap[element] || 'bg-background';
}

/**
 * Returns the timeline background color class
 */
export function getTimelineBgClass(): string {
  return 'bg-timeline-bg';
}

/**
 * Base color background classes
 */
export const getBaseBg = {
  '50': 'bg-base-50',
  '100': 'bg-base-100',
  '200': 'bg-base-200',
  '300': 'bg-base-300',
  '400': 'bg-base-400',
  '500': 'bg-base-500',
  '600': 'bg-base-600',
  '700': 'bg-base-700',
  '800': 'bg-base-800',
  '900': 'bg-base-900',
  '950': 'bg-base-950',
};

/**
 * Base color text classes
 */
export const getBaseText = {
  '50': 'text-base-50',
  '100': 'text-base-100',
  '200': 'text-base-200',
  '300': 'text-base-300',
  '400': 'text-base-400',
  '500': 'text-base-500',
  '600': 'text-base-600',
  '700': 'text-base-700',
  '800': 'text-base-800',
  '900': 'text-base-900',
  '950': 'text-base-950',
};

/**
 * Base color border classes
 */
export const getBaseBorder = {
  '50': 'border-base-50',
  '100': 'border-base-100',
  '200': 'border-base-200',
  '300': 'border-base-300',
  '400': 'border-base-400',
  '500': 'border-base-500',
  '600': 'border-base-600',
  '700': 'border-base-700',
  '800': 'border-base-800',
  '900': 'border-base-900',
  '950': 'border-base-950',
};

/**
 * Base color hover background classes
 */
export const getBaseHoverBg = {
  '50': 'hover:bg-base-50',
  '100': 'hover:bg-base-100',
  '200': 'hover:bg-base-200',
  '300': 'hover:bg-base-300',
  '400': 'hover:bg-base-400',
  '500': 'hover:bg-base-500',
  '600': 'hover:bg-base-600',
  '700': 'hover:bg-base-700',
  '800': 'hover:bg-base-800',
  '900': 'hover:bg-base-900',
  '950': 'hover:bg-base-950',
};

/**
 * Base color hover text classes
 */
export const getBaseHoverText = {
  '50': 'hover:text-base-50',
  '100': 'hover:text-base-100',
  '200': 'hover:text-base-200',
  '300': 'hover:text-base-300',
  '400': 'hover:text-base-400',
  '500': 'hover:text-base-500',
  '600': 'hover:text-base-600',
  '700': 'hover:text-base-700',
  '800': 'hover:text-base-800',
  '900': 'hover:text-base-900',
  '950': 'hover:text-base-950',
};

/**
 * Primary color background classes
 */
export const getPrimaryBg = {
  '50': 'bg-primary-50',
  '100': 'bg-primary-100',
  '200': 'bg-primary-200',
  '300': 'bg-primary-300',
  '400': 'bg-primary-400',
  '500': 'bg-primary-500',
  '600': 'bg-primary-600',
  '700': 'bg-primary-700',
  '800': 'bg-primary-800',
  '900': 'bg-primary-900',
  '950': 'bg-primary-950',
};

/**
 * Primary color text classes
 */
export const getPrimaryText = {
  '50': 'text-primary-50',
  '100': 'text-primary-100',
  '200': 'text-primary-200',
  '300': 'text-primary-300',
  '400': 'text-primary-400',
  '500': 'text-primary-500',
  '600': 'text-primary-600',
  '700': 'text-primary-700',
  '800': 'text-primary-800',
  '900': 'text-primary-900',
};

/**
 * Primary color border classes
 */
export const getPrimaryBorder = {
  '50': 'border-primary-50',
  '100': 'border-primary-100',
  '200': 'border-primary-200',
  '300': 'border-primary-300',
  '400': 'border-primary-400',
  '500': 'border-primary-500',
  '600': 'border-primary-600',
  '700': 'border-primary-700',
  '800': 'border-primary-800',
  '900': 'border-primary-900',
};
