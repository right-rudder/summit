#!/bin/bash

# === CONFIGURATION ===
COMPANY_NAME="summit-flight-academy"    # change as needed
LOCALIZATION="kansas-city-missouri"     # change as needed

# Generic keywords pool — one or two will be randomly picked
GENERIC_KEYWORDS=(
  "pilot training"
  "pilot academy"
  "flight training"
  "flight school"
  "flying lessons"
  "flight academy"
  "become a pilot"
)

# === MAIN SCRIPT ===

# Function to generate a random combination of 1 or 2 keywords
generate_generic_keyword() {
  local count=${#GENERIC_KEYWORDS[@]}
  local first="${GENERIC_KEYWORDS[$((RANDOM % count))]}"
  local second=""
  
  # 50% chance to add a second keyword
  if (( RANDOM % 2 )); then
    second="${GENERIC_KEYWORDS[$((RANDOM % count))]}"
  fi

  # Replace spaces with dashes
  echo "${first// /-}${second:+_${second// /-}}"
}

# Process each file in the current directory
for file in *; do
  # Skip directories
  [[ -d "$file" ]] && continue
  
  # Extract filename and extension
  extension="${file##*.}"
  filename="${file%.*}"

  # Generate random generic keyword
  generic_keyword=$(generate_generic_keyword)

  # Build new filename
  new_name="${COMPANY_NAME}_${LOCALIZATION}_${generic_keyword}_${filename// /-}.${extension}"

  # Avoid overly long names (>100 chars for safety)
  if (( ${#new_name} > 100 )); then
    new_name="${new_name:0:96}.${extension}"
  fi

  # Rename file
  mv -v -- "$file" "$new_name"
done
