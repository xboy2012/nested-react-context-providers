# Nested React Context Providers


DEMO: https://x87wq.csb.app/

CodeSandBox: https://codesandbox.io/s/github/xboy2012/nested-react-context-providers/tree/master/

In this demo, we created 4 components

+ `ComponentA` which consumes `ContextA`
+ `ComponentB` which consumes `ContextB`
+ `ComponentAB` which consumes `ContextA` and `ContextB`
+ `ComponentC` which consumes `ContextC`
+ `ComponentD` which consumes no context but its children consumes some Context


To make it simple, we use random numbers to trigger Context value update.

Click `Change A`/`Change B`/`Change C` and see the console for what happened.


# Result

+ Only Components that consumes the changed Context DIRECTLY will be updated.
+ Component with children consume changed Context WILL NOT UPDATE.
+ Changes of other irrelevant contexts WILL NOT TRIGGER COMPONENT UPDATE.

# Conclusion

Nested React Context Providers will not trigger unnecessary rerender. (except that you do not use `memo`);

# Recommend

Separate Context into several Small contexts will be better than a single Context.
