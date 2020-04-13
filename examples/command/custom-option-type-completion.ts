#!/usr/bin/env -S deno --allow-env

import { Command } from '../../packages/command/lib/command.ts';

await new Command()
    .option( '-e, --email <value:string:email>', 'Your email address.' )
    .complete( 'email', () => [ 'aaa@example.com', 'bbb@example.com', 'ccc@example.com' ] )
    .parse( Deno.args );