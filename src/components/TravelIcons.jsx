// src/components/icons/TravelIcons.jsx
import React from "react";

// Base icon component for consistent style
const IconBase = ({ children, viewBox = "0 0 64 64", className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`travel-icon ${className}`}
    {...props}
  >
    {children}
  </svg>
);

/* ----------------- Transport Icons ----------------- */
export const HouseboatIcon = (props) => (
  <IconBase {...props}>
    <path d="M8 44h48l-6-10H14l-6 10z" />
    <rect x="20" y="24" width="24" height="12" rx="2" />
    <circle cx="26" cy="30" r="2" />
    <circle cx="32" cy="30" r="2" />
    <circle cx="38" cy="30" r="2" />
    <path d="M8 46h48" strokeOpacity="0.5" />
  </IconBase>
);

export const ShikaraIcon = (props) => (
  <IconBase {...props}>
    <path d="M10 42h44l-6-12H16l-6 12z" />
    <path d="M20 30v-6c0-2 2-4 4-4h8c2 0 4 2 4 4v6" />
    <path d="M20 26h16" />
    <path d="M28 20v10" />
  </IconBase>
);

export const FlightIcon = (props) => (
  <IconBase {...props}>
    <path d="M2 32l60-16-12 12 12 12-12 12L2 36z" />
    <path d="M18 28l10 4" />
    <path d="M18 36l10 4" />
  </IconBase>
);

export const CarIcon = (props) => (
  <IconBase {...props}>
    <rect x="14" y="26" width="36" height="14" rx="3" />
    <circle cx="20" cy="44" r="4" />
    <circle cx="44" cy="44" r="4" />
    <path d="M20 26l4-6h16l4 6" />
  </IconBase>
);

export const TrainIcon = (props) => (
  <IconBase {...props}>
    <rect x="12" y="20" width="40" height="16" rx="3" />
    <circle cx="20" cy="40" r="3" />
    <circle cx="44" cy="40" r="3" />
    <rect x="18" y="24" width="8" height="6" />
    <rect x="34" y="24" width="8" height="6" />
  </IconBase>
);

export const BusIcon = (props) => (
  <IconBase {...props}>
    <rect x="10" y="20" width="44" height="18" rx="3" />
    <circle cx="20" cy="42" r="3" />
    <circle cx="44" cy="42" r="3" />
    <path d="M14 28h8M26 28h8M38 28h8" />
  </IconBase>
);

/* ----------------- Stay & Trips ----------------- */
export const HotelIcon = (props) => (
  <IconBase {...props}>
    <rect x="16" y="12" width="32" height="36" rx="2" />
    <rect x="12" y="40" width="40" height="6" />
    <rect x="20" y="18" width="6" height="6" />
    <rect x="30" y="18" width="6" height="6" />
    <rect x="20" y="28" width="6" height="6" />
    <rect x="30" y="28" width="6" height="6" />
  </IconBase>
);

export const WeekendTripIcon = (props) => (
  <IconBase {...props}>
    <rect x="20" y="24" width="20" height="20" rx="2" />
    <circle cx="30" cy="20" r="4" />
    <path d="M24 44l4-8h8l4 8" />
  </IconBase>
);

export const CruiseIcon = (props) => (
  <IconBase {...props}>
    <path d="M10 36h44l-6-12H16l-6 12z" />
    <rect x="22" y="22" width="20" height="8" rx="2" />
    <path d="M8 38h48" strokeOpacity="0.5" />
  </IconBase>
);

export const TicketIcon = (props) => (
  <IconBase {...props}>
    <rect x="14" y="20" width="36" height="20" rx="2" />
    <path d="M18 30h28" />
    <circle cx="32" cy="30" r="3" />
  </IconBase>
);

/* ----------------- Calendar & Nature ----------------- */
export const CalendarIcon = (props) => (
  <IconBase {...props}>
    <rect x="14" y="16" width="36" height="32" rx="2" />
    <path d="M14 24h36" />
    <path d="M22 16v-6M42 16v-6" />
  </IconBase>
);

export const SunIcon = (props) => (
  <IconBase {...props}>
    <circle cx="32" cy="32" r="8" />
    <path d="M32 14v4M32 46v4M14 32h4M46 32h4M20 20l3 3M44 44l-3-3M20 44l3-3M44 20l-3 3" />
  </IconBase>
);

export const BeachIcon = (props) => (
  <IconBase {...props}>
    <circle cx="32" cy="20" r="6" />
    <path d="M12 42c6-4 12-6 20-6s14 2 20 6" />
  </IconBase>
);

export const MountainIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 44l20-28 20 28H12z" />
    <path d="M28 28l4 6h-8l4-6z" />
  </IconBase>
);

export const CompassIcon = (props) => (
  <IconBase {...props}>
    <circle cx="32" cy="32" r="14" />
    <path d="M28 28l12-4-4 12-12 4 4-12z" />
  </IconBase>
);

/* ----------------- City, Packages, Insurance ----------------- */
export const CityIcon = (props) => (
  <IconBase {...props}>
    <rect x="14" y="20" width="12" height="20" />
    <rect x="30" y="14" width="20" height="26" />
    <path d="M20 24h2M20 28h2M20 32h2M36 20h2M36 24h2M36 28h2" />
  </IconBase>
);

export const PackagesIcon = (props) => (
  <IconBase {...props}>
    <rect x="14" y="20" width="36" height="20" rx="2" />
    <path d="M14 30h36M32 20v20" />
  </IconBase>
);

export const CityBreaksIcon = (props) => (
  <IconBase {...props}>
    <rect x="18" y="20" width="28" height="24" />
    <circle cx="32" cy="32" r="6" />
  </IconBase>
);

export const InsuranceUmbrellaIcon = (props) => (
  <IconBase {...props}>
    <path d="M16 28a16 16 0 0 1 32 0H16z" />
    <path d="M32 28v16" />
  </IconBase>
);

export const InsuranceDocsIcon = (props) => (
  <IconBase {...props}>
    <rect x="20" y="14" width="24" height="36" rx="2" />
    <path d="M20 20h24M20 28h24M20 36h24" />
  </IconBase>
);

export const WalletIcon = (props) => (
  <IconBase {...props}>
    <rect x="16" y="22" width="32" height="20" rx="2" />
    <circle cx="40" cy="32" r="2" />
  </IconBase>
);

export const PaymentIcon = (props) => (
  <IconBase {...props}>
    <rect x="16" y="24" width="32" height="16" rx="2" />
    <circle cx="28" cy="32" r="2" />
    <circle cx="36" cy="32" r="2" />
  </IconBase>
);

/* ----------------- Camping & Outdoors ----------------- */
export const BicycleIcon = (props) => (
  <IconBase {...props}>
    <circle cx="20" cy="40" r="6" />
    <circle cx="44" cy="40" r="6" />
    <path d="M20 40l6-12h8l6 12" />
    <path d="M26 28v-6h12" />
  </IconBase>
);

export const CabinIcon = (props) => (
  <IconBase {...props}>
    <path d="M16 36l16-16 16 16v12H16V36z" />
    <rect x="26" y="38" width="12" height="10" />
  </IconBase>
);

export const CutleryIcon = (props) => (
  <IconBase {...props}>
    <path d="M20 16v32M28 16v12M36 16v12M36 28v20" />
    <path d="M44 16v32" />
  </IconBase>
);

export const TentIcon = (props) => (
  <IconBase {...props}>
    <path d="M12 44l20-28 20 28H12z" />
    <path d="M32 16v28" />
  </IconBase>
);

export const TreesIcon = (props) => (
  <IconBase {...props}>
    <path d="M20 44l6-12-6-12-6 12 6 12z" />
    <path d="M44 44l6-12-6-12-6 12 6 12z" />
    <path d="M20 44v6M44 44v6" />
  </IconBase>
);

/* ----------------- Export as categories array ----------------- */
export const categories = [
  { key: "houseboats", label: "Houseboats", icon: HouseboatIcon },
  { key: "shikara", label: "Shikara", icon: ShikaraIcon },
  { key: "flights", label: "Flights", icon: FlightIcon },
  { key: "cars", label: "Cars", icon: CarIcon },
  { key: "trains", label: "Trains", icon: TrainIcon },
  { key: "bus", label: "Bus", icon: BusIcon },
  { key: "hotels", label: "Hotels", icon: HotelIcon },
  { key: "weekend", label: "Weekend Trips", icon: WeekendTripIcon },
  { key: "cruise", label: "Cruise", icon: CruiseIcon },
  { key: "ticket", label: "Ticket", icon: TicketIcon },
  { key: "calendar", label: "Calendar", icon: CalendarIcon },
  { key: "sun", label: "Sun", icon: SunIcon },
  { key: "beach", label: "Beach", icon: BeachIcon },
  { key: "mountain", label: "Mountain", icon: MountainIcon },
  { key: "compass", label: "Compass", icon: CompassIcon },
  { key: "city", label: "City", icon: CityIcon },
  { key: "packages", label: "Packages", icon: PackagesIcon },
  { key: "citybreaks", label: "City Breaks", icon: CityBreaksIcon },
  { key: "insurance-umbrella", label: "Insurance (Umbrella)", icon: InsuranceUmbrellaIcon },
  { key: "insurance-docs", label: "Insurance (Docs)", icon: InsuranceDocsIcon },
  { key: "wallet", label: "Wallet", icon: WalletIcon },
  { key: "payment", label: "Payment", icon: PaymentIcon },
  { key: "bicycle", label: "Bicycle", icon: BicycleIcon },
  { key: "cabin", label: "Cabin", icon: CabinIcon },
  { key: "cutlery", label: "Cutlery", icon: CutleryIcon },
  { key: "tent", label: "Tent", icon: TentIcon },
  { key: "trees", label: "Trees", icon: TreesIcon },
];
