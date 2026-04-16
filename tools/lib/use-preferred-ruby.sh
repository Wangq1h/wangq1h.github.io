#!/usr/bin/env bash

use_preferred_ruby() {
  local current_major=""
  local current_version=""
  local desired_major_minor=""
  local prefix=""
  local candidates=()

  if command -v ruby >/dev/null 2>&1; then
    current_version="$(ruby -e 'print RUBY_VERSION' 2>/dev/null || true)"
    current_major="${current_version%%.*}"

    if [[ -n "$current_major" && "$current_major" -ge 3 ]]; then
      if [[ ! -f .ruby-version ]]; then
        return
      fi

      desired_major_minor="$(cut -d. -f1,2 .ruby-version 2>/dev/null || true)"
      if [[ -z "$desired_major_minor" || "$current_version" == "$desired_major_minor"* ]]; then
        return
      fi
    fi
  fi

  if [[ -f .ruby-version ]]; then
    desired_major_minor="$(cut -d. -f1,2 .ruby-version 2>/dev/null || true)"
    if [[ -n "$desired_major_minor" ]]; then
      candidates+=(
        "/opt/homebrew/opt/ruby@${desired_major_minor}"
        "/usr/local/opt/ruby@${desired_major_minor}"
      )
    fi
  fi

  candidates+=(
    "/opt/homebrew/opt/ruby@3.4"
    "/opt/homebrew/opt/ruby@3.3"
    "/opt/homebrew/opt/ruby@3.2"
    "/opt/homebrew/opt/ruby@3.1"
    "/opt/homebrew/opt/ruby@3.0"
    "/opt/homebrew/opt/ruby"
    "/usr/local/opt/ruby@3.4"
    "/usr/local/opt/ruby@3.3"
    "/usr/local/opt/ruby@3.2"
    "/usr/local/opt/ruby@3.1"
    "/usr/local/opt/ruby@3.0"
    "/usr/local/opt/ruby"
  )

  for prefix in "${candidates[@]}"; do
    if [[ -x "$prefix/bin/ruby" ]]; then
      export PATH="$prefix/bin:$PATH"
      return
    fi
  done
}
