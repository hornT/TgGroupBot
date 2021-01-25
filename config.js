const {
    BOT_ID,
    BE_TEAM,
    FE_TEAM,
    QA_TEAM,
    PORT = 5500,
    NODE_ENV,
} = process.env;

module.exports = {
    BOT_ID,
    BE_TEAM,
    FE_TEAM,
    QA_TEAM,
    PORT: Number(PORT),
    NODE_ENV,
}