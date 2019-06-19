#include "nodeconfAddon.h"
  
Napi::Number nodeconfAddon::Multiply(const Napi::CallbackInfo& info) 
{
  Napi::Env env = info.Env();
  Napi::Number first = info[0].As<Napi::Number>();
  Napi::Number second = info[1].As<Napi::Number>();

  int returnValue = first.Int32Value() * second.Int32Value();
  
  return Napi::Number::New(env, returnValue);
}

Napi::Object nodeconfAddon::Init(Napi::Env env, Napi::Object exports) 
{
  exports.Set(
"multiply", Napi::Function::New(env, nodeconfAddon::Multiply)
  );
 
  return exports;
}

