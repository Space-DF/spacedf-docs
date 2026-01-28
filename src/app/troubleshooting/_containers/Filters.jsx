"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Funnel, RotateCw, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const Filters = ({
  filterValues,
  setFilters,
  tagOptions = [],
  sourceOptions = [],
  errorCodeOptions = [],
}) => {
  const searchRef = React.useRef(null)

  const handleResetFilter = () => {
    setFilters({
      source: [],
      tags: [],
      errorCode: [],
      q: "",
    })

    searchRef.current.value = ""
  }

  return (
    <div className="mt-6 flex justify-end md:justify-start items-start gap-4 w-full">
      <div className="flex-1 hidden md:block">
        <FiltersCombobox
          ref={searchRef}
          filterValues={filterValues}
          setFilters={setFilters}
          tagOptions={tagOptions}
          errorCodeOptions={errorCodeOptions}
          sourceOptions={sourceOptions}
        />
      </div>

      <Popover>
        <PopoverTrigger asChild className="md:hidden">
          <Button variant="outline">
            <Funnel size={16} />
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-55 p-3 max-h-75 overflow-auto"
          align="start"
        >
          <FiltersCombobox
            ref={searchRef}
            filterValues={filterValues}
            setFilters={setFilters}
            tagOptions={tagOptions}
            errorCodeOptions={errorCodeOptions}
            sourceOptions={sourceOptions}
          />
        </PopoverContent>
      </Popover>

      <Button
        variant="outline"
        size="icon"
        className="size-9"
        onClick={handleResetFilter}
      >
        <RotateCw className="pointer-events-none" />
      </Button>
    </div>
  )
}

const FiltersCombobox = ({
  filterValues,
  setFilters,
  ref,
  tagOptions = [],
  sourceOptions = [],
  errorCodeOptions = [],
}) => {
  const { source, errorCode, tags } = filterValues
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start w-full">
      <SourceCombobox
        values={source}
        onValueChange={(values) =>
          setFilters({ ...filterValues, source: values })
        }
        options={sourceOptions}
      />

      <ErrorCodeCombobox
        values={errorCode}
        onValueChange={(values) =>
          setFilters({ ...filterValues, errorCode: values })
        }
        options={errorCodeOptions}
      />

      <TagsCodeCombobox
        values={tags}
        onValueChange={(values) =>
          setFilters({ ...filterValues, tags: values })
        }
        options={tagOptions}
      />

      <InputSearch
        onSearchChange={(q) => {
          setFilters({ ...filterValues, q })
        }}
        ref={ref}
      />
    </div>
  )
}

const SourceCombobox = ({ values = [], onValueChange, options = [] }) => {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={options}
      value={values}
      onValueChange={(values) => onValueChange?.(values)}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Sources" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const ErrorCodeCombobox = ({ values = [], onValueChange, options = [] }) => {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={options}
      value={values}
      onValueChange={(values) => onValueChange?.(values)}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Error Codes" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const TagsCodeCombobox = ({ values = [], onValueChange, options = [] }) => {
  const anchor = useComboboxAnchor()

  return (
    <Combobox
      multiple
      autoHighlight
      items={options}
      value={values}
      onValueChange={(values) => onValueChange?.(values)}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Tags" />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const InputSearch = ({ onSearchChange, ref }) => {
  const debounceId = React.useRef(null)

  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput
        ref={ref}
        placeholder="Search..."
        onChange={(event) => {
          if (debounceId) {
            clearTimeout(debounceId.current)
          }

          debounceId.current = setTimeout(() => {
            onSearchChange?.(event.target.value)
          }, 500)
        }}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  )
}
