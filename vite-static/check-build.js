if (process.env.FAIL_BUILD === '1') { console.error('Build failed on purpose (FAIL_BUILD=1)'); process.exit(1); }
