import { SEVERITIES } from "@audit/shared";
import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/api/health", async () => {
    return { ok: true, service: "audit-api", name: "kelarc" };
});

app.get("/api/severities", async () => {
    return SEVERITIES;
});

console.log(SEVERITIES.length);                                                                                                                                                                                                                                                 
await app.listen({ port: Number(process.env.PORT), host: "127.0.0.1" });