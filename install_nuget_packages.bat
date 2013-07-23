@echo Installing nuget packages
tools\nuget\nuget.exe install angularjs -OutputDirectory packages
tools\nuget\nuget.exe install Twitter.Bootstrap -OutputDirectory packages
@echo Finished npm nuget packages