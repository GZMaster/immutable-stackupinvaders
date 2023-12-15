window.passport = new window.immutable.passport.Passport({
	baseConfig: new window.immutable.config.ImmutableConfiguration({
		environment: window.immutable.config.Environment.SANDBOX,
	}),
	clientId: "b2dL9n54SWrf4rpuYvnZILB8UOjYsW5K",
	redirectUri: "https://safe-alpaca-vigorously.ngrok-free.app",
	logoutRedirectUri:
		"https://safe-alpaca-vigorously.ngrok-free.app/logout.html",
	audience: "platform_api",
	scope: "openid offline_access email transact",
});
