#include <napi.h>
namespace nodeconfAddon {
  Napi::Number Multiply(const Napi::CallbackInfo& info);
  Napi::Object Init(Napi::Env env, Napi::Object exports);
}