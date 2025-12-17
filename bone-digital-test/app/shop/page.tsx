'use client'

import ShopHero from "@/components/custom/shop-hero";
import ShopifyCollection from "@/components/custom/shopify-collection";
import ShopifyStyle from "@/components/custom/shopify-style";
import { NavMenu } from "@/components/nav/nav-menu";
import { CurrentTimePeriod, TimePeriod, TimePeriodType } from "@/components/time/time";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export default function Shop() {
    const [period, setPeriod] = useState<TimePeriodType>(CurrentTimePeriod);

    const updatePeriod = (value: string) => {
        setPeriod(value as TimePeriodType);
    }

    // Due to implementation of the HTML, forcibly changing the time causes the page to scroll to top before reloading
    // downside - will not update automatically without a refresh
    return (
        <div>
            {/* This should usually go in a layout component */}
            <NavMenu />

            {ShopHero(period)}
            <div className="container pt-8">
                <div>
                    <h3 className="mb-2">Override time period</h3>
                    <Select defaultValue={period} onValueChange={(e) => updatePeriod(e)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Time Override Options</SelectLabel>
                                {Object.values(TimePeriod).map((periodValue) => (
                                    <SelectItem key={periodValue} value={periodValue}>
                                        {periodValue}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* If I was to use shadow roots, I would use it in this area or inside */}
                {/* As my implementation didn't work out - I'm thinking due to how I implemented the raw HTML in the child component - I'm semi mimicking the concept with a stylesheet to override the globals in this area */}
                <ShopifyStyle />
                <ShopifyCollection handle={`${period}`} />
            </div>
        </div>
    );
}