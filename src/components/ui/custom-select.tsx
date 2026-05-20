import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface CustomSelectProps {
  name: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
}

export const CustomSelect = ({
  name,
  options,
  placeholder = "Select an option...",
  icon,
  disabled = false,
  required = false,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selectedValue} required={required} />

      {/* Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-body-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all disabled:opacity-50 flex items-center justify-between gap-3 hover:border-primary/50"
        whileHover={disabled ? undefined : { boxShadow: "0 0 0 4px hsl(var(--primary) / 0.05)" }}
        whileFocus={{ boxShadow: "0 0 0 4px hsl(var(--primary) / 0.1)" }}
      >
        <div className="flex items-center gap-3 flex-1 text-left">
          {icon && <div className="text-muted-foreground">{icon}</div>}
          <span className={selectedLabel ? "text-foreground" : "text-muted-foreground"}>
            {selectedLabel || placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-lg z-50 overflow-hidden"
          >
            <div className="max-h-64 overflow-y-auto">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value, option.label)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className={`w-full px-4 py-3 text-body-sm text-left flex items-center justify-between gap-2 transition-colors ${
                    selectedValue === option.value
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <span>{option.label}</span>
                  {selectedValue === option.value && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
