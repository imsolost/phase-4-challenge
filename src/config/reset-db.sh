#!/bin/bash
npm run db:drop
npm run db:create
npm run db:schema
npm run db:seed
npm run load-session-store
