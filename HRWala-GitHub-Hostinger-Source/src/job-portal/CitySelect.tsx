import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { pakistanCities } from './pakistanCities';

export default function CitySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const id = useId();

  const cities = useMemo(
    () => pakistanCities.filter(city =>
      city.toLowerCase().includes(value.trim().toLowerCase())
    ),
    [value]
  );

  const options = useMemo(() => {
    const result = [
      { label: 'All cities', value: '' },
      ...cities.map(city => ({ label: city, value: city })),
    ];

    if ('remote'.includes(value.trim().toLowerCase())) {
      result.push({ label: 'Remote', value: 'Remote' });
    }

    return result;
  }, [cities, value]);

  useEffect(() => {
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        setOpen(false);
        setActive(-1);
      }
    }

    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, []);

  useEffect(() => {
    if (open && active >= 0) {
      root.current
        ?.querySelector(`[data-option-index="${active}"]`)
        ?.scrollIntoView({ block: 'nearest' });
    }
  }, [active, open]);

  function select(city: string) {
    onChange(city);
    setOpen(false);
    setActive(-1);
    input.current?.focus();
  }

  return (
    <div
      className="jp-city"
      ref={root}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false);
          setActive(-1);
        }
      }}
    >
      <img
        className="jp-city-icon"
        src="/hrwala-job-portal/assets/imgGroup.svg"
        alt=""
        width="18"
        height="22"
      />

      <input
        ref={input}
        className="jp-city-input"
        type="text"
        value={value}
        placeholder="City or Remote"
        aria-label="City or Remote"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={id}
        aria-activedescendant={
          open && active >= 0 ? `${id}-${active}` : undefined
        }
        autoComplete="off"
        onFocus={() => setOpen(true)}
        onChange={event => {
          onChange(event.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            event.preventDefault();
            setOpen(false);
            setActive(-1);
          } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            setActive(current => Math.min(current + 1, options.length - 1));
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
            setActive(current =>
              current < 0 ? options.length - 1 : Math.max(current - 1, 0)
            );
          } else if (event.key === 'Enter' && open && active >= 0) {
            event.preventDefault();
            select(options[active].value);
          } else if (event.key === 'Enter') {
            setOpen(false);
          }
        }}
      />

      <button
        type="button"
        className="jp-city-arrow"
        aria-label={open ? 'Close city options' : 'Open city options'}
        aria-expanded={open}
        onMouseDown={event => event.preventDefault()}
        onClick={() => {
          input.current?.focus();
          setOpen(current => !current);
          setActive(-1);
        }}
      >
        ⌄
      </button>

      {open && (
        <div className="jp-city-menu">
          <div
            role="listbox"
            id={id}
            aria-label="Pakistan cities"
            className="jp-city-listbox jp-city-scroll"
          >
            {options.map((option, index) => (
              <div
                key={option.label}
                id={`${id}-${index}`}
                role="option"
                aria-selected={value === option.value}
                data-option-index={index}
                className={`${active === index ? 'active ' : ''}${
                  option.value === 'Remote' ? 'jp-remote' : ''
                }`}
                onMouseDown={event => event.preventDefault()}
                onClick={() => select(option.value)}
              >
                {option.label}
                {value && value === option.value && <span aria-hidden="true">✓</span>}
              </div>
            ))}

            {!cities.length && (
              <p className="jp-city-empty">No matching cities</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}