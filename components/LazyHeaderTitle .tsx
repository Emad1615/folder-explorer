"use client";

import dynamic from "next/dynamic";
import { HeaderTitleSkeleton } from "./../app/_ui/HeaderTitleSkeleton";

const LazyHeaderTitle = dynamic(
  () => import("./../app/_ui/HeaderTitle").then((mod) => mod.HeaderTitle),
  { ssr: false, loading: () => <HeaderTitleSkeleton /> }
);

export default LazyHeaderTitle;
