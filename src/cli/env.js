const parseEnv = (prefix) => {
    const rssEnvVariables = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix))
        .map(([key, value], i) => `${key}${i+1}=${value}${i+1}`).join('; ');
    console.log(rssEnvVariables);
};

parseEnv('RSS_');