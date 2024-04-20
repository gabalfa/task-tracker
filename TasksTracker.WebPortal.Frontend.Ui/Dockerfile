FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5276

ENV ASPNETCORE_URLS=http://+:5276

USER app
# FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG configuration=Release
WORKDIR /src
COPY ["TasksTracker.WebPortal.Frontend.Ui/TasksTracker.WebPortal.Frontend.Ui.csproj", "TasksTracker.WebPortal.Frontend.Ui/"]
RUN dotnet restore "TasksTracker.WebPortal.Frontend.Ui/TasksTracker.WebPortal.Frontend.Ui.csproj"
COPY . .
WORKDIR "/src/TasksTracker.WebPortal.Frontend.Ui"
RUN dotnet build "TasksTracker.WebPortal.Frontend.Ui.csproj" -c $configuration -o /app/build

FROM build AS publish
ARG configuration=Release
RUN dotnet publish "TasksTracker.WebPortal.Frontend.Ui.csproj" -c $configuration -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TasksTracker.WebPortal.Frontend.Ui.dll"]
