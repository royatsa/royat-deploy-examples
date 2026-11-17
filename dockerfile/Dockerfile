FROM node:22-alpine
WORKDIR /app
# Set FAIL_BUILD=1 as a build variable to see how a failed build is reported.
ARG FAIL_BUILD=0
RUN if [ "$FAIL_BUILD" = "1" ]; then echo "Build failed on purpose (FAIL_BUILD=1)"; exit 1; fi
COPY server.js VERSION ./
ENV PORT=3000
EXPOSE 3000
USER node
CMD ["node", "server.js"]
