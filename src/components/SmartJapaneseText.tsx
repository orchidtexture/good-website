import React, { useMemo } from 'react';
import { loadDefaultJapaneseParser } from 'budoux';

// Load the parser once outside the component
const parser = loadDefaultJapaneseParser();

interface SmartJapaneseTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const SmartJapaneseText = ({ 
  children, 
  className = "", 
  as: Component = "span" 
}: SmartJapaneseTextProps) => {
  const isString = typeof children === 'string';

  const renderedContent = useMemo(() => {
    if (!isString) return children;

    const segments = parser.parse(children as string);
    
    return segments.map((segment: string, i: number) => (
      <React.Fragment key={i}>
        {segment}
        {i < segments.length - 1 && <wbr />}
      </React.Fragment>
    ));
  }, [children, isString]);

  return (
    <Component className={`break-keep wrap-anywhere ${className}`}>
      {renderedContent}
    </Component>
  );
};
