import { useEffect, useState } from "react";
import PriceRangeUI from "@components/UI/PriceRangeUI";
import { PriceRangeInputProps } from "@/types/types";
import { useDispatch, useSelector } from "@/services/store";
import { setActiveRangeState } from "@/services/slices/DataProductsSlice/DataProductsSlice";

export default function PriceRange({
  minPrice,
  maxPrice,
}: PriceRangeInputProps) {
  const dispatch = useDispatch();
  const range = useSelector((state) => state.Products.range);
  const [priceText, setPriceText] = useState<[number, number]>(range);

  useEffect(() => {
    dispatch(setActiveRangeState(range));
  }, [range, dispatch]);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const newRange = value as [number, number];
      dispatch(setActiveRangeState(newRange));
      setPriceText(newRange);
    }
  };

  const handleTextInputChange = () => {
    if (priceText[0] < minPrice) {
      const newRange: [number, number] = [minPrice, priceText[1]];
      dispatch(setActiveRangeState(newRange));
      setPriceText(newRange);
      return;
    }
    if (priceText[0] > maxPrice) {
      const newRange: [number, number] = [maxPrice, priceText[1]];
      dispatch(setActiveRangeState(newRange));
      setPriceText(newRange);
      return;
    }

    if (priceText[1] > maxPrice) {
      const newRange: [number, number] = [priceText[0], maxPrice];
      dispatch(setActiveRangeState(newRange));
      setPriceText(newRange);
      return;
    }
    if (priceText[1] < minPrice) {
      const newRange: [number, number] = [priceText[0], minPrice];
      dispatch(setActiveRangeState(newRange));
      setPriceText(newRange);
      return;
    }

    dispatch(setActiveRangeState(priceText));
  };

  return (
    <PriceRangeUI
      minPrice={minPrice}
      maxPrice={maxPrice}
      handleSliderChange={handleSliderChange}
      handleTextInputChange={handleTextInputChange}
      setPriceText={setPriceText}
      priceText={priceText}
      range={range}
    />
  );
}
