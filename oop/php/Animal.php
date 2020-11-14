<?php

declare(strict_types = 1);

/** */
abstract class Animal
{
  private string $name;

  function __construct()
  {
    fwrite(STDOUT, "construct Animal\n");
  }

  public function getName(): string
  {
    fwrite(STDOUT, "getName Animal\n");
    
    return $this->name;
  }

  public function setName(string $name): void
  {
    fwrite(STDOUT, "setName Animal\n");

    $this->name = $name;
  }

  public function sayHello(): void
  {
    fwrite(STDOUT, "sayHello Animal\n");
  }

  abstract public function eat(): void;
}

interface Walk
{
  public function walk(): void;
  public function run(): void;
}

interface Fly
{
  public function jump(): void;
  public function fly(): void;
}
