# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "forty_jekyll_theme"
  spec.version       = "1.2"
  spec.authors       = ["Tristen Even"]
  spec.email         = ["tristengeven@gmail.com"]

  spec.summary       = %q{A Jekyll version of the "Forty" theme by HTML5 UP.}
  spec.homepage      = "https://github.com/tristengeven/tristengeven.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 2.0.1"
end
