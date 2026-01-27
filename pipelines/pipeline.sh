#!/bin/bash

set -e # If error, exit immediately

# Colors
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[1;33m"
NC="\033[0m"

# Script start
echo ""
echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}        Starting Pipeline        ${NC}"
echo -e "${BLUE}=================================${NC}"
echo ""

echo -e "${YELLOW}Step 1: Installing dependencies from cache...${NC}"
pnpm install
rm -rf node_modules
pnpm install
echo -e "${GREEN}[✓] Dependencies installed${NC}" 
echo ""

echo -e "${YELLOW}Step 2: Type checking...${NC}"
pnpm nuxt typecheck # pnpm vue-tsc --noEmit ne fonctionne pas ?
echo -e "${GREEN}[✓] Type checking passed${NC}"
echo ""

echo -e "${YELLOW}Step 3: Static analysis with ESLint...${NC}"
pnpm eslint "app/**/*.{vue,ts}"
echo -e "${GREEN}[✓] Static analysis passed${NC}"
echo ""

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE} Pipeline Completed Successfully ${NC}"
echo -e "${BLUE}=================================${NC}"