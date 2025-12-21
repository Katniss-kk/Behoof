import { useState } from "react";
import PriceRangeUI from "@components/UI/PriceRangeUI";
import { PriceRangeInputProps } from "@/types/types";
import { useDispatch } from "@/services/store";
import { filterPrice } from "@/services/slices/DataProductsSlice/DataProductsSlice";

export default function PriceRange({
  minPrice,
  maxPrice,
}: PriceRangeInputProps) {
  const dispatch = useDispatch();
  const [range, setRange] = useState<[number, number]>([minPrice, maxPrice]);

  const [priceText, setPriceText] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  const Filter = ([min, max]: number[]) => {
    dispatch(filterPrice([min, max]));
  };

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const newRange = value as [number, number];
      setRange(newRange);
      setPriceText(newRange);
      Filter(range)
    }
  };

  const handleTextInputChange = () => {
    if (priceText[0] < minPrice) {
      const newRange: [number, number] = [minPrice, priceText[1]];
      setRange(newRange);
      setPriceText(newRange);
      return;
    }
    if (priceText[0] > maxPrice) {
      const newRange: [number, number] = [maxPrice, priceText[1]];
      setRange(newRange);
      setPriceText(newRange);
      return;
    }

    if (priceText[1] > maxPrice) {
      const newRange: [number, number] = [priceText[0], maxPrice];
      setRange(newRange);
      setPriceText(newRange);
      return;
    }
    if (priceText[1] < minPrice) {
      const newRange: [number, number] = [priceText[0], minPrice];
      setRange(newRange);
      setPriceText(newRange);
      return;
    }

    setRange(priceText);
  };


  return (
    <PriceRangeUI
      minPrice={minPrice}
      maxPrice={maxPrice}
      handleSliderChange={handleSliderChange}
      handleTextInputChange={handleTextInputChange}
      range={range}
      setPriceText={setPriceText}
      priceText={priceText}
    />
  );
}
