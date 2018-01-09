#!/bin/bash
npm install
npm run db:drop
npm run db:create
npm run db:schema
npm run db:seed
npm run load-session-store
npm run dev
