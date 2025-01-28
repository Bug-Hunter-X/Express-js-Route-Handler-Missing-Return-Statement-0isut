# Express.js Route Handler Missing Return Statement

This repository demonstrates a common error in Express.js route handlers: forgetting to include a `return` statement in conditional branches.  This can lead to unexpected behavior where subsequent lines of code execute even when a condition is met (such as a 404 not found scenario).