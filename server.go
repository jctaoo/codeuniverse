package main

import (
	"codeuniverse/graph"

	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()

	graphEndpoint := graph.NewEndpointsImpl()
	graphEndpoint.MapHandlersToRoutes(engine.Group("/graph"))

	engine.Run()
}
