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
echo -e "${GREEN}[✓] Dependencies installed${NC}" 
echo ""

echo -e "${YELLOW}Step 2: Type checking...${NC}"
pnpm nuxt typecheck # pnpm vue-tsc --noEmit does not work well with Nuxt
echo -e "${GREEN}[✓] Type checking passed${NC}"
echo ""

echo -e "${YELLOW}Step 3: Static analysis with ESLint...${NC}"
pnpm eslint "app/**/*.{vue,ts}"
echo -e "${GREEN}[✓] Static analysis passed${NC}"
echo ""

echo -e "${YELLOW}Step 4: Building production package...${NC}"
rm -rf publish
pnpm nuxi build # vite is used by nuxt 
echo -e "${GREEN}[✓] Production package built successfully${NC}"
echo ""

echo -e "${YELLOW}Step 5: Running tests...${NC}"
pnpm vitest run
echo -e "${GREEN}[✓] All tests passed${NC}"
echo ""

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE} Pipeline Completed Successfully ${NC}"
echo -e "${BLUE}=================================${NC}"