module.exports = {
    apps: [
        {
            name: "Shopify",
            script: "./index.js",
            watch: true,
            env: {
                "NODE_ENV": "devlopment",
            },
            env_stage: {
                "NODE_ENV": "stage",
            },
            env_production: {
                "NODE_ENV": "production",
            }
        }
    ]
}