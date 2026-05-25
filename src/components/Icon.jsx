import {
  Bot,
  CheckCircle2,
  CloudCog,
  Code2,
  Gamepad2,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Phone,
  Route,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const ICONS = {
  bot: Bot,
  check: CheckCircle2,
  cloud: CloudCog,
  code: Code2,
  game: Gamepad2,
  globe: Globe2,
  lightbulb: Lightbulb,
  mail: Mail,
  mapPin: MapPin,
  network: Network,
  phone: Phone,
  route: Route,
  shield: ShieldCheck,
  mobile: Smartphone,
  trading: TrendingUp,
  website: Globe2,
};

function Icon({ name, size = 24, strokeWidth = 1.8, className = "" }) {
  const LucideIcon = ICONS[name] ?? Lightbulb;

  return (
    <LucideIcon
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}

export { Icon };
