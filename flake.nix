{
    description = "My project dev environment";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    };

    outputs = { self, nixpkgs }:
        let
            system = "x86_64-linux";
            pkgs = import nixpkgs { inherit system; };
        in {
            devShells.${system}.default = pkgs.mkShell {
                buildInputs = [
                    pkgs.nodejs_20
                    pkgs.yarn-berry
                ];
            };
        };
}