{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Define the packages to be available in the shell
  buildInputs = [
    pkgs.nodejs_20 # Use a specific Node.js version, like 20
    pkgs.yarn-berry       # Use the default Yarn from nixpkgs
  ];
}