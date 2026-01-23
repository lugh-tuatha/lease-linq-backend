export default () => ({
  port: parseInt(process.env.PORT!, 10) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  printer: {
    baseUrl: process.env.PRINTER_BASE_URL || 'http://localhost:8080/print',
  },
});
